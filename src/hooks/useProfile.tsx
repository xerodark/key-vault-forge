
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

export type Profile = {
  id: string;
  username: string | null;
  avatar_url: string | null;
  is_admin: boolean | null;
  total_contribution: number | null;
  current_value: number | null;
  quarterly_return: number | null;
  monthly_growth: number | null;
  annual_growth: number | null;
  created_at: string | null;
  updated_at: string | null;
};

export function useProfile() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session) {
          setLoading(false);
          return;
        }

        // Try to get the profile
        const { data, error: fetchError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .maybeSingle();

        if (fetchError) {
          console.error('Error fetching profile:', fetchError);
          setError(fetchError.message);
          toast({
            title: "Error loading profile",
            description: fetchError.message,
            variant: "destructive",
          });
          setLoading(false);
          return;
        }

        // If profile doesn't exist, create it
        if (!data) {
          const defaultProfile = {
            id: session.user.id,
            username: session.user.email,
            avatar_url: null,
            is_admin: false,
            total_contribution: 0,
            current_value: 0,
            quarterly_return: 0,
            monthly_growth: 0,
            annual_growth: 0
          };

          const { data: newProfile, error: insertError } = await supabase
            .from('profiles')
            .insert(defaultProfile)
            .select()
            .single();

          if (insertError) {
            console.error('Error creating profile:', insertError);
            setError(insertError.message);
            toast({
              title: "Error creating profile",
              description: insertError.message,
              variant: "destructive",
            });
          } else {
            setProfile(newProfile);
            console.log('Created new profile:', newProfile);
          }
        } else {
          setProfile(data);
          console.log('Loaded existing profile:', data);
        }
      } catch (err: any) {
        console.error('Error in profile hook:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
    
    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          fetchProfile();
        } else {
          setProfile(null);
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [toast]);

  return { profile, loading, error };
}

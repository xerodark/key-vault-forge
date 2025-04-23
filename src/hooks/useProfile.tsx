
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

        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();

        if (error) {
          console.error('Error fetching profile:', error);
          setError(error.message);
          toast({
            title: "Error loading profile",
            description: error.message,
            variant: "destructive",
          });
        } else {
          setProfile(data);
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
      (_event, session) => {
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

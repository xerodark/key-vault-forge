
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useProfile } from "@/hooks/useProfile";
import { Loader2 } from "lucide-react";

export function UserAvatar() {
  const { profile, loading } = useProfile();
  
  // Get initials from username or email
  const getInitials = () => {
    if (!profile) return "U";
    
    if (profile.username) {
      return profile.username
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .substring(0, 2);
    }
    
    return "U";
  };

  if (loading) {
    return (
      <Avatar>
        <AvatarFallback className="bg-crypto-gray-dark">
          <Loader2 className="h-4 w-4 animate-spin" />
        </AvatarFallback>
      </Avatar>
    );
  }

  return (
    <Avatar>
      {profile?.avatar_url && (
        <AvatarImage src={profile.avatar_url} alt="User avatar" />
      )}
      <AvatarFallback className="bg-crypto-gray-dark">
        {getInitials()}
      </AvatarFallback>
    </Avatar>
  );
}

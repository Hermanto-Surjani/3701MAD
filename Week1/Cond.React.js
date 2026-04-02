// Example in a React Native component 

const WelcomeMessage = ({ isLoggedIn, user }) => { 
return ( 
    <View> 
        {isLoggedIn && <Text>Welcome back, {user.name}!</Text>} 
        {!isLoggedIn && <Text>Please log in.</Text>} 
    </View> 
  ); 
}; 
// Using nullish coalescing for default props
const UserProfile = ({ user }) => { 
const displayName = user?.name ?? "Anonymous"; 
return <Text>User: {displayName}</Text>; 
};
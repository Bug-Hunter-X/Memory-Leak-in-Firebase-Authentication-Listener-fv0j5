import { onAuthStateChanged, Auth } from 'firebase/auth';
import { useEffect } from 'react';

const useAuthStatus = (auth: Auth) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe(); // Unsubscribe on component unmount
  }, [auth]);

  return user;
};
export default useAuthStatus;
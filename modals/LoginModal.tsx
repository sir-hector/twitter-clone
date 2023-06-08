import Input from "@/components/Input";
import Modal from "@/components/Modal";
import useLoginModel from "@/hooks/useLoginModel";
import { useCallback, useState } from "react";

export const LoginModal = () => {
  const loginModal = useLoginModel();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async() => {
    try{
        setIsLoading(true);
        // TO DO LOG IN
        loginModal.onClose();

    }catch(error){
        console.log(error)
    }finally {
        setIsLoading(false)
    }
  }, [loginModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
        <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isLoading} 
        />
        <Input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={isLoading} 
        />       
    </div>
  )

  return <Modal 
    disabled={isLoading}
    isOpen={loginModal.isOpen}
    title="Login"
    actionLabel="Sign In"
    onClose={loginModal.onClose}
    onSubmit={onSubmit}
    body={bodyContent}
  />;
};

export default LoginModal;

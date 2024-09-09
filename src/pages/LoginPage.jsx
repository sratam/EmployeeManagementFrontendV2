import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoginContext } from "@/components/AppWrapper";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";

export default function LoginPage() {
  const [userName, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error,setError] = useState();
  const [loading,setLoading] = useState();
  const { setToken,setRole } = useContext(LoginContext);

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    const url = "/users/login";
    if (userName == "" || password == "") {
      setError("Please fill Username and Password");
      return;
    }
    setLoading(true);
    axios
      .post(url, {
        username:userName,
        password:password,
      })
      .then((res) => {
        setToken(res.data.token);
        toast("Logged in Successfully!")
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.data.token}`;
        navigate("/home");
      })
      .catch((err) => {
        setError("Invalid Username or Password");
        console.log(err)
        toast("Invalid Credentials")
      }).finally(() => setLoading(false));
  };

  return (
    <div className="h-[85vh] flex flex-col justify-center items-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Enter your Username and password to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Username</Label>
              <Input
                id="email"
                type="text"
                onChange={handleUsernameChange}
                required
                value={userName}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                onChange={handlePasswordChange}
                value={password}
              />
            </div>
            <Button type="submit" className="w-full" onClick={() => handleSubmit()}>
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

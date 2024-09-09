import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { toast } from "sonner";
import axios from "axios";

export default function EditEmployeeForm() {
  const [error, setErrorMessage] = useState("");
  const [loading, setLoading] = useState();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    status: "active",
    salary: "",
  });

  useEffect(() => {
    const url = `/api/${id}`;
    axios
      .get(url)
      .then((res) => {
        setLoading(true);
        setFormData(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { name, email, role, status, salary } = formData;
    if (!name || !email || !role || !status || !salary) {
      setErrorMessage("All fields are required.");
      return false;
    }
    setErrorMessage(""); // Clear error message if all fields are filled
    return true;
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const url = `/api/update/${id}`;
    axios
      .patch(url, formData)
      .then((res) => {
        toast("Updated Successfully");
      })
      .catch((err) =>{
        if(err.response.status == 401){
          setErrorMessage("You are not authorized to perform this operation")
        }else{
          setErrorMessage("Some Error has Occured")
        }
      })
      .finally(() => setLoading(false));
  };

  if(error){
    toast(error)
  }

  return (
    <div className="mx-auto flex gap-4 flex-col w-[50%] py-8">
      <h1 className="text-2xl mb-2">Edit Employee Details</h1>

      <div className="flex-col">
        <Label htmlFor="firstname"> Name</Label>
        <Input
          name="name"
          value={formData.name}
          className="mt-1"
          onChange={handleChange}
        />
      </div>

      <div className="flex-col">
        <Label htmlFor="email">Email address</Label>
        <Input
          name="email"
          value={formData.email}
          className="mt-1"
          onChange={handleChange}
        />
      </div>

      <div className="flex-col">
        <Label htmlFor="email">Role</Label>
        <Input
          name="role"
          value={formData.role}
          className="mt-1"
          onChange={handleChange}
        />
      </div>

      <div className="flex">
        <div className="flex-col">
          <Label htmlFor="salary">salary</Label>
          <Input
            name="salary"
            value={formData.salary}
            className="mt-1"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-4">
        {formData.status == "active"?
        <Button variant="destructive" onClick={()=>{
          setFormData(prev => {return {...prev,status:"deactive"}})
          toast(`${formData.name} Deactived`)
        }
        }>Remove Employee</Button>
        :
        <Button variant="secondary" 
        onClick={()=>{
          setFormData(prev => {return {...prev,status:"active"}})
          toast(`${formData.name} Activated`)
        }}
        >Activate Employee</Button>
        }
        <Button onClick={handleSubmit}>Save Changes</Button>
      </div>
    </div>
  );
}

import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function EmployeeForm() {
  return (
    <div className="mx-auto flex gap-4 flex-col w-[50%] py-8">
      <h1 className="text-2xl mb-2">Register Employees</h1>

      <div className="flex flex-row w-full justify-between">
        <div className="flex-col w-[45%]">
          <Label htmlFor="firstname">First Name</Label>
          <Input className="mt-1" />
        </div>
        <div className="flex-col w-[45%]">
          <Label htmlFor="lastname">Last Name</Label>
          <Input className="mt-1" />
        </div>
      </div>

      <div className="flex-col">
        <Label htmlFor="email">Email address</Label>
        <Input className="mt-1" />
      </div>

      <div className="flex-col">
        <Label htmlFor="email">Role</Label>
        <Input className="mt-1" />
      </div>

      <div className="flex">
        <div className="flex-col">
          <Label htmlFor="salary">salary</Label>
          <Input className="mt-1" />
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-4">
        <Button variant="destructive">Remove Employee</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import ProfileCard from "./ProfileCard";
import { PencilLine } from "lucide-react";
import React from "react";
import { formatDate } from "@/utils/formatDate";
import { getRandomNumber } from "@/utils/getRandomNumber";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

function TableComponent({ employees }) {
  const Navigate = useNavigate();
  return (
    <div className="mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Hire Date</TableHead>
            <TableHead>salary</TableHead>
            <TableHead>status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees?.map((employee, id) => {
            return (
              <TableRow key={id}>
                <TableCell className="font-medium">{employee.eid}</TableCell>
                <TableCell>
                  <ProfileCard
                    name={employee.name}
                    email={employee.email}
                    photoUrl={`https://ui.shadcn.com/avatars/0${getRandomNumber(
                      1,
                      5
                    )}.png`}
                  />
                </TableCell>
                <TableCell>{employee.role}</TableCell>
                <TableCell>{formatDate(employee.hireDate)}</TableCell>
                <TableCell>{`$${employee.salary}`}</TableCell>
                <TableCell>
                  <div
                    className={`flex items-center justify-center w-20 h-8 font-semibold rounded-full ${
                      employee.status === "active"
                        ? "bg-green-100 border border-green-600 text-green-600"
                        : "bg-red-100 border border-red-600 text-red-600"
                    }`}
                  >
                    {employee.status === "active" ? "Active" : "Inactive"}
                  </div>
                </TableCell>
                <TableCell>
                 
                    <PencilLine
                      color="white"
                      size={20}
                      className="cursor-pointer"
                      onClick={() => Navigate(`/editemployee/${employee.eid}`)}
                    />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default TableComponent;

"use client";

import BynomialDistribution from "@/components/distributions/bynomial/bynomial";
import PoissonDistribution from "@/components/distributions/poisson/poisson";
import NormalDistribution from "@/components/distributions/normal/normal";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const [selected, setSelected] = useState("");

  const chooseDistribution = (value: string) => {
    setSelected(value);
  };

  return (
    <div className="max-w-3xl mx-auto">
    <div className="mt-4">
      <Select onValueChange={chooseDistribution}>
        <SelectTrigger>
          <SelectValue placeholder="Choose a table" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="bynomial">Bynomial Distribution</SelectItem>
          <SelectItem value="poisson">Poisson Distribution</SelectItem>
          <SelectItem value="normal">Normal Distribution</SelectItem>
        </SelectContent>
      </Select>
      <div className="mt-4">
        {selected === "bynomial" && <BynomialDistribution />}
        {selected === "poisson" && <PoissonDistribution />}
        {selected === "normal" && <NormalDistribution />}
      </div>
    </div>  
    </div>
  );
}


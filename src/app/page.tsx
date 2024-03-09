
"use client"
import { useState, useEffect } from 'react';

export default function Home() {
 
  // Define state variables for each person's count
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);
  const [count3, setCount3] = useState<number>(0);

  // Load the counts from local storage when the component mounts
  useEffect(() => {
    const data = localStorage.getItem('counts');
    if (data) {
      const savedCounts = JSON.parse(data);
      setCount1(savedCounts.count1);
      setCount2(savedCounts.count2);
      setCount3(savedCounts.count3);
    }
  }, []);

  // Save the counts to local storage whenever they change
  useEffect(() => {
    const counts = { count1, count2, count3 };
    localStorage.setItem('counts', JSON.stringify(counts));
  }, [count1, count2, count3]);

  // Render the component with buttons to increment each count
  return (
    <div className='flex justify-center items-center gap-[8rem] rounded-md border w-[40vw] h-[50vh] ml-[35rem] mt-[10%]'>
      <div className='flex flex-col items-center justify-center'>
        Person 1: <span>{count1}</span> <button className='p-2 bg-black text-zinc-50 w-[100px] rounded-md' onClick={() => setCount1(count1 + 1)}>+</button>
      </div>
      <div className='flex flex-col items-center justify-center'>
        Person 2: <span>{count2}</span> <button className='p-2 bg-black text-zinc-50 w-[100px] rounded-md' onClick={() => setCount2(count2 + 1)}>+</button>
      </div>
      <div className='flex flex-col items-center justify-center'>
        Person 3: <span>{count3}</span> <button className='p-2 bg-black text-zinc-50 w-[100px] rounded-md' onClick={() => setCount3(count3 + 1)}>+</button>
      </div>
    </div>
  );
}
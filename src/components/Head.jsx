import { Input } from "@/components/Input";
export default function Head() {
  return (
    <div>
      <div>
        <img src="Logo.svg" alt="" />
      </div>
      <div className="text-[#202124]">Join Us! 😎</div>
      <div className="text-[#8E8E8E]">
        Please provide all current information accurately.
      </div>
      <div>
        <Input />
        <Input />
      </div>
    </div>
  );
}

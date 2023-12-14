import FunctionEX from "@/components/FunctionEX";
import Hero from "@/components/Hero";
import AuthProvider from "@/components/AuthProvider";
import Instruction from "@/components/Instruction";
import Selection from "@/components/Selection";
import Faq from "@/components/Faq";
export default function Home() {
  return (
    
    <>  
    <div></div>
        <AuthProvider>
        <Hero />
        <Selection />
        <Instruction />
        <Faq />
        <FunctionEX />
      </AuthProvider>
    </>
  )
}

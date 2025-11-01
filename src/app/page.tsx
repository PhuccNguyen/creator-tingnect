import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Benefits from '@/components/Benefits/Benefits'
import Steps from '@/components/Steps/Steps'
import FAQ from '@/components/FAQ/FAQ'
import Registration from '@/components/Registration/Registration'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Móc câu: Lợi ích lớn nhất đập vào mắt */}
        <Hero />
        
        {/* 2. Giới thiệu & Lợi ích: Gộp chung - Giải thích Creator Lab & Chứng minh gói 39.5 Triệu */}
        <section id="benefits">
          <Benefits />
        </section>
        
        {/* 4. Quy trình: Tham gia có dễ không? */}
        <section id="steps">
          <Steps />
        </section>
        
        {/* 5. Giải đáp: Xử lý các rào cản/thắc mắc cuối cùng */}
        <section id="faq">
          <FAQ />
        </section>
        
        <Registration /> 
        
        <Footer />
      </main>
    </>
  )
}

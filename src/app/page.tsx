import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Introduction from '@/components/Introduction/Introduction'
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
        
        {/* 2. Giải thích: Đây là cái gì? */}
        <section id="introduction">
          <Introduction />
        </section>
        
        {/* 3. Lợi ích: Tại sao tôi nên tham gia? */}
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
        
        {/* 6. Chuyển đổi: 
             GỘP 2 MỤC CTA & Registration làm MỘT. 
             Mục này chứa Form và là lời kêu gọi hành động cuối cùng.
        */}
        <Registration /> 
        
        <Footer />
      </main>
    </>
  )
}

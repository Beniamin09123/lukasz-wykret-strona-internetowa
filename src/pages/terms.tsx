import { NavBar } from '@/components/ui/navbar';
import { Footer } from '@/components/sections/footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function TermsPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main className="pt-32 pb-20 px-8 lg:px-[120px]">
        <div className="max-w-[800px] mx-auto">
          <h1 style={{ fontFamily: 'DM Serif Display' }} className="text-3xl md:text-4xl font-bold mb-12">
            Regulamin
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section>
              <h2 className="text-2xl font-bold mb-6">§1 Informacje ogólne</h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li>Właścicielem i administratorem strony internetowej działającej pod adresem [adres strony] jest Annderson sp. z o.o. z siedzibą pod adresem ul. Zwierzyniecka 22/2, 31-105 Kraków, kontakt: kredyty@annderson.pl.</li>
                <li>Strona umożliwia użytkownikom skorzystanie z formularza kontaktowego w celu umówienia bezpłatnej konsultacji w zakresie doradztwa kredytowego.</li>
                <li>Korzystając ze strony, użytkownik akceptuje niniejszy regulamin.</li>
              </ol>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-6">§2 Zasady korzystania</h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li>Użytkownik zobowiązuje się do korzystania ze strony zgodnie z obowiązującym prawem i zasadami współżycia społecznego.</li>
                <li>Zabronione jest podejmowanie jakichkolwiek działań, które mogłyby zakłócić funkcjonowanie strony.</li>
                <li>Wysłanie formularza kontaktowego nie stanowi zawarcia umowy – stanowi zaproszenie do kontaktu.</li>
              </ol>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-6">§3 Odpowiedzialność</h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li>Administrator dokłada wszelkich starań, aby strona działała poprawnie, ale nie gwarantuje ciągłości jej działania.</li>
                <li>Treści zawarte na stronie mają charakter informacyjny i nie stanowią oferty w rozumieniu Kodeksu cywilnego.</li>
              </ol>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-6">§4 Prawa autorskie</h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li>Wszystkie treści (teksty, grafiki, zdjęcia) są chronione prawem autorskim.</li>
                <li>Zabrania się kopiowania lub rozpowszechniania jakichkolwiek elementów strony bez pisemnej zgody właściciela.</li>
              </ol>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
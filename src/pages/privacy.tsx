import { NavBar } from '@/components/ui/navbar';
import { Footer } from '@/components/sections/footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function PrivacyPage() {
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
            Polityka Prywatności
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section>
              <h2 className="text-2xl font-bold mb-6">§1 Administrator danych osobowych</h2>
              <p className="mb-6">
                Administratorem Twoich danych osobowych jest Annderson sp. z o.o., ul. Zwierzyniecka 22/2, 31-105 Kraków, e-mail: kredyty@annderson.pl.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-6">§2 Zakres przetwarzanych danych</h2>
              <p className="mb-4">Przetwarzamy następujące dane użytkowników:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>imię i nazwisko,</li>
                <li>adres e-mail,</li>
                <li>numer telefonu,</li>
                <li>adres IP,</li>
                <li>dane z plików cookies,</li>
                <li>identyfikator formularza (uuid / primary key).</li>
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-6">§3 Cel i podstawa przetwarzania</h2>
              <p className="mb-4">Dane przetwarzane są:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>w celu kontaktu i umówienia konsultacji (na podstawie art. 6 ust. 1 lit. b RODO),</li>
                <li>w celach statystycznych i analitycznych (na podstawie uzasadnionego interesu – art. 6 ust. 1 lit. f RODO),</li>
                <li>w celach marketingowych (jeśli wyrażono zgodę – art. 6 ust. 1 lit. a RODO).</li>
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-6">§4 Odbiorcy danych</h2>
              <p className="mb-4">Dane mogą być przekazywane podmiotom trzecim świadczącym usługi hostingowe, analityczne i domenowe:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google LLC (Google Analytics),</li>
                <li>Squarespace, Inc. (hosting, domeny).</li>
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-6">§5 Pliki cookies</h2>
              <p className="mb-4">
                Strona korzysta z plików cookies w celach technicznych, analitycznych i marketingowych.
                Użytkownik może zarządzać ustawieniami cookies w swojej przeglądarce.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-6">§6 Twoje prawa</h2>
              <p className="mb-4">Masz prawo do:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>dostępu do swoich danych,</li>
                <li>sprostowania danych,</li>
                <li>usunięcia danych,</li>
                <li>ograniczenia przetwarzania,</li>
                <li>wniesienia sprzeciwu,</li>
                <li>przeniesienia danych,</li>
                <li>cofnięcia zgody w dowolnym momencie.</li>
              </ul>
              <p className="mt-4">Kontakt: kredyty@annderson.pl</p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-6">§7 Okres przechowywania</h2>
              <p>
                Dane przechowujemy przez czas niezbędny do realizacji celów, nie dłużej niż 3 lata od ostatniego kontaktu.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
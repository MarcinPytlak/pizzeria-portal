# Dashboard
 - `/` - statystyki dzisiejszych zamówień(zdalne i lokalne), lista eventów i rezerwacji na dzień dzisiejszy
# logowanie
- `/login` - pola na login i hasło, guzik do zalogowania (link do dashboardu)
# widok dostępności stolików
- `/tables`- wybór daty i godziny, tabela z listą rezerwacji oraz wydarzeń( każda kolumna = stolik, wiersz = blok 30 minut, ma przypominać widok tygodnia w kalendarzu google, gdzie w kolumnach zamiast dni są różne stoliki), po kliknięciu rezerwacji lub eventu przechodzimy do strony szczegółów
- `/tables/booking/:id` - wszystkie informacje dotyczące rezerwacji, musi umożliwiać edycję i zapisanie zmian

- `/tables/booking/new` - analogczinie do poprzedniej, bez początkowych informacji
- `/tables/events/:id` - analogicznie do powyższej, dla eventów
- `/tables/events/new` - analogczinie do poprzedniej, bez początkowych informacji

# widok kelnera

- `/waiter` - tabela, która w wierszach będzie wyświetlać stoliki oraz różne infrmacje ( status, czas od ostatniej aktywności, w ostatniej kolumnie lista dostępnych akcji dla stolika)
- `/waiter/order/new` - numer stolika ( edytowalny), menu produktów w restauracji, opcje wybranego produktu, zamówienie ( zamówione produkty z opcjami i ceną), kwota zamówienia

- `/waiter/order/:id` - jak powyższa,

# widok kuchni

- `/kitchen` - wyświetlać listę zamówień w kolejności ich złożenia ( lista musi zawierać nr stolika lub zamówienia zdalnego oraz pełne infromację dotyczące zamówionych dań), na liście musi być możliwość odznaczenia zamówienia jako zrealizowane
document.addEventListener("DOMContentLoaded", function() {
    const calendar = document.getElementById("calendar");
  
    // Funkce pro vytvoření rezervace
    function createReservation(date, time, numberOfPeople) {
      const reservation = {
        date: date,
        time: time,
        numberOfPeople: numberOfPeople
      };
      return reservation;
    }
  
    // Funkce pro zobrazení kalendáře
    function renderCalendar() {
      // Logika pro vykreslení kalendáře
    }
  
    // Funkce pro uložení rezervace do local storage
    function saveReservation(reservation) {
      let reservations = JSON.parse(localStorage.getItem("reservations")) || [];
      reservations.push(reservation);
      localStorage.setItem("reservations", JSON.stringify(reservations));
    }
  
    // Funkce pro načtení rezervací z local storage
    function loadReservations() {
      return JSON.parse(localStorage.getItem("reservations")) || [];
    }
  
    // Přidání event listeneru na kliknutí na kalendář
    calendar.addEventListener("click", function(event) {
      // Získání informací o rezervaci od uživatele
      const date = event.target.dataset.date; // Předpokládáme, že datum je uloženo v atributu dataset
      const time = prompt("Zadejte čas rezervace:");
      const numberOfPeople = prompt("Zadejte počet osob:");
  
      // Vytvoření rezervace
      const reservation = createReservation(date, time, numberOfPeople);
  
      // Uložení rezervace do local storage
      saveReservation(reservation);
  
      // Znovu načtení rezervací a aktualizace kalendáře
      renderCalendar();
    });
  
    // Přidání event listeneru na tlačítko pro přihlášení
    const loginButton = document.getElementById("loginButton");
    loginButton.addEventListener("click", function() {
      const loginModal = document.getElementById("loginModal");
      loginModal.style.display = "block";
    });
  
    // Přidání event listeneru pro zavření modálního okna
    const closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const modal = this.parentElement.parentElement;
        modal.style.display = "none";
      });
    });
  
    // Načtení a vykreslení existujících rezervací při načtení stránky
    renderCalendar();
  });
  
  
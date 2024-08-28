// List of attractions
const attractions = [
    { id: 'slide-button', name: 'Slide', interaction: slideInteraction },
    { id: 'swim-bar-button', name: 'Swim Bar', interaction: swimBarInteraction },
    { id: 'lounge-chairs-button', name: 'Lounge Chairs', interaction: loungeChairsInteraction },
    { id: 'fountain-button', name: 'Fountain', interaction: fountainInteraction },
    { id: 'tables-chairs-button', name: 'Tables and Chairs', interaction: tablesChairsInteraction },
    { id: 'umbrellas-button', name: 'Umbrellas', interaction: umbrellasInteraction }
  ];
  
  // Function to handle interactions
  function handleInteraction(attraction) {
    console.log(`Interacting with: ${attraction.name}`);
    attraction.interaction();
  }
  
  // Specific interactions for each attraction
  function slideInteraction() {
    alert('Enjoy the thrilling water slide!');
  }
  
  function swimBarInteraction() {
    alert('Have a drink at the swim-up bar!');
  }
  
  function loungeChairsInteraction() {
    alert('Relax on the comfortable lounge chairs!');
  }
  
  function fountainInteraction() {
    alert('Admire the beautiful fountain!');
  }
  
  function tablesChairsInteraction() {
    alert('Enjoy a meal at the poolside tables and chairs!');
  }
  
  function umbrellasInteraction() {
    alert('Stay cool under the umbrellas!');
  }
  
  // Add event listeners to each attraction element
  attractions.forEach(attraction => {
    const element = document.getElementById(attraction.id);
    if (element) {
      console.log(`Adding event listener to: ${attraction.name}`);
      element.addEventListener('click', () => handleInteraction(attraction));
    } else {
      console.error(`Element with id ${attraction.id} not found`);
    }
  });
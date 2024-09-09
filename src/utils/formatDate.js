export function formatDate(inputDate) {
    // Create a new Date object from the input date
    const date = new Date(inputDate);
  
    // Define options for the month formatting
    const options = { month: 'short' };
  
    // Extract day, month, and year
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', options);
    const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of the year
  
    // Format the date as "20 Aug 25"
    return `${day} ${month} ${year}`;
  }
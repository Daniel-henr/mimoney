export const formatCurrency = (value) => {
    return parseFloat(value)
      .toFixed(2)
      .replace('.', ',') 
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.'); 
  };

  export const truncateValue = (value, maxLength) => {
    const formattedValue = formatCurrency(value);
    return formattedValue.length > maxLength ? `${formattedValue.slice(0, maxLength - 3)}...` : formattedValue;
  };
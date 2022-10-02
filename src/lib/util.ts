export const getDDayInPercentage = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const today = new Date();
  const end = new Date(endDate);
  const diff = today.getTime() - start.getTime();
  const total = end.getTime() - start.getTime();
  // spent time / total time 
  const result = Math.ceil(diff / total * 100);
  return result;
};

export const handleNavClick = (id: string) => {
    let element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };
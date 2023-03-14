function BasicExample() {
    const handleClickScroll = () => {
      const element = document.getElementById('experiences');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    return (
        <button className="btn-scroll" onClick={handleClickScroll}>hi</button>
      );
    }
    
    export default BasicExample;
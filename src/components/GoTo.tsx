const GoTo = (id:String) => {
    const element = document.querySelector(`#${id}`)
    
    element?.scrollIntoView({
      behavior: 'smooth'
    })
};

export default GoTo;

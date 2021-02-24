function  Input({onChange, type, name, maxLength}) {
  // if (uppercase) name = name.toUpperCase()
  return(
      <input onChange={onChange} type={type} name={name} maxLength={maxLength}/>
  );
}

export default Input;

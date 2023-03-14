export default function MeatButton() {
  return (
    <button onClick={toggle} className='meatButton' style={{ color: 'maroon' }}>I'm a  meatButton button</button>
  );
}


function toggle() {
  alert('Selected!')
}
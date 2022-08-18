import './Calendar.css';
import Navigation from '../../components/navigation/navigation';
import Header from "../../components/header/header";


const Calendar = () => {

    return (
        <div className='main-home'>
            <Navigation />
            <Header />
            <div className='workspace' id="workspace">
            </div>
        </div>
    )
}
export default Calendar

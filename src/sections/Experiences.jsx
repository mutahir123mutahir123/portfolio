import { TimeLine } from "../components/Timeline"
import { experiences } from "../constants"

const Experiences = () => {
  return (
    <div id="work" className="w-full">
    <TimeLine data={experiences}/>
    </div>
  )
}

export default Experiences
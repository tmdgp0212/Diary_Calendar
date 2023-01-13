import DiaryEditor from "../components/DiaryEditor";
import { useParams } from "react-router-dom";

const NewDiary = () => {
  const { date } = useParams();

  return (
    <div>
      <DiaryEditor today={date} />
    </div>
  );
};

export default NewDiary;

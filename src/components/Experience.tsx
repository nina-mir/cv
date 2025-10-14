
interface ExperienceProps {
    title: string;
    location: string;
    employer: string;
    startingTime: string | number;
    endingTime: string | number;
    tasks: string[];
}

export default function Experience({
    title,
    location,
    employer,
    startingTime,
    endingTime,
    tasks
}: ExperienceProps) {
    return (
        <div className="mb-2 py-2 px-2">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-600">{employer} - {location}</p>
            <p className="text-sm text-gray-500">{startingTime} - {endingTime}</p>
            <ul className="list-disc ml-5 mt-2">
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    )
}
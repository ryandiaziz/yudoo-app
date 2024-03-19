import useDocumentTitle from "../../components/elements/DocumentTitle"

const UpcomingPage = () => {
    useDocumentTitle('Upcoming')
    return (
        <div className="flex justify-center items-center h-screen">
            <p className="borr max-[425px]:bg-red-400">UpcomingPage</p>
        </div>
    )
}

export default UpcomingPage
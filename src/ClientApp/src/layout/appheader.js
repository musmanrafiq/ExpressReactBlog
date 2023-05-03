import { useSelector } from 'react-redux';

function Appheader() {

    const count = useSelector((state) => state.counter.count)

    return (
        <>
            <div>This is header {count}</div>
        </>
    )
}

export default Appheader;
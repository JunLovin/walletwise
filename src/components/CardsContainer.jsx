import Card from '@components/Card'

function CardsContainer() {
    return (
        <>
            <div className="grid grid-cols-3 grid-rows-6 gap-8 gap-y-20 mt-12 height-dvh">
                <div className="row-span-3">
                    <Card title="Lorem ipsum dolor sit amet" date={"Marzo 29, 2025"} summary="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"/>
                </div>
                <div className="row-span-3">
                    <Card title="Lorem ipsum dolor sit amet" date={"Marzo 29, 2025"} summary="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"/>
                </div>
                <div className="row-span-3">
                    <Card title="Lorem ipsum dolor sit amet" date={"Marzo 29, 2025"} summary="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"/>
                </div>
                <div className="row-span-3 row-start-4">
                    <Card title="Lorem ipsum dolor sit amet" date={"Marzo 29, 2025"} summary="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"/>
                </div>
                <div className="row-span-3 row-start-4">
                    <Card title="Lorem ipsum dolor sit amet" date={"Marzo 29, 2025"} summary="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"/>
                </div>
                <div className="row-span-3 row-start-4">
                    <Card title="Lorem ipsum dolor sit amet" date={"Marzo 29, 2025"} summary="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"/>
                </div>
            </div>  
        </>
    )
}

export default CardsContainer   
/* eslint-disable jsx-a11y/alt-text */

function EmptyPage() {
    return (
        <div className="items-center bg-[#e3edf9] w-[100%] h-screen">
            <div className="relative top-[50%] translate-y-[-50%] flex flex-col w-[50%] h-[50%] m-auto bg-[#fff]">
                <div className="w-[100%] h-[40px] bg-[#034ea1]"></div>
                <h1 className="text-center my-16 text-[102px]">404</h1>
                <p className="flex-1 text-center text-[56px]">Page Not Found</p>
            </div>
        </div>
    );
}

export default EmptyPage;

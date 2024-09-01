import Cards from "../Components/Ui/card";



export default function projectView() {
  return (<>

    <main className="container m-auto flex min-h-screen flex-col w-full lg:p-12 p-4">
       
       <div className="projectView">
        <div>
            <h2>Project name</h2>
            <h5> Developer name</h5>
        </div>
        
        <div className="project_image">
            images/project
        </div>


        <div className="navigation">
            <button>visit</button>
            <button>buy</button>
        </div>

        
        <div className="project_desc">
            <h4>Project Description</h4>

        </div>

       </div>


      
    </main>
    </>
  );
}

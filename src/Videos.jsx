import { useState } from "react";
import React from "react";

const Videos = () => {
    const [Videos, setVideo] = useState([
        {
            id: 0,
            fullName: "Standing Alone (Succession Theme Trap Remix)",
            link: "https://www.youtube.com/watch?v=gLgD-zuo_JA",
            year: "2022",
            gender: "male",
            cover: "/src/image/StandingAlone.jpeg",
            perfomer: "Alex"
        },
        {
            id: 1,
            fullName: "One OK Rock - The Beginning (Cover)",
            link: "https://www.youtube.com/watch?v=e4sZszHqf14",
            year: "2022",
            gender: "male",
            cover: "/src/image/Thebeginning.jpeg",
            perfomer: "Alex"
        },
             {
            id: 2,
            fullName: "Polyphia - Champagne Dual Guitar Cover",
            link: "https://www.youtube.com/watch?v=ZWapTvTcmQI",
            year: "2018",
            gender: "male",
            cover: "/src/image/champagne.jpeg",
            perfomer: "Alex"
        },
             {
            id: 3,
            fullName: "fripSide - Future Gazer Solo guitar cover",
            link: "https://www.youtube.com/watch?v=H-XZnx-JBYU",
            year: "2018",
            gender: "male",
            cover: "/src/image/FutureGazer.jpeg",
            perfomer: "Alex"
        },
                   {
            id: 4,
            fullName: "Blood Blockade Battlefront ED Sugar Song and Bitter Step - UNISON SQUARE GARDEN Guitar Cover",
            link: "https://www.youtube.com/watch?v=Ax0F-T_LQeE",
            year: "2017",
            gender: "male",
            cover: "/src/image/SugarSong.jpeg",
            perfomer: "Alex"
        },
                   {
            id: 5,
            fullName: "Pop Team Epic Opening (Guitar and Bass Cover)",
            link: "https://www.youtube.com/watch?v=bk5hpra9Gfc",
            year: "2018",
            gender: "male",
            cover: "/src/image/PopTeamEpic.jpeg",
            perfomer: "Alex"
        },
                   {
            id: 6,
            fullName: "One OK Rock - The Beginning (Cover)",
            link: "https://www.youtube.com/watch?v=e4sZszHqf14",
            year: "2022",
            gender: "male",
            cover: "/src/image/Thebeginning.jpeg",
            perfomer: "Alex"
        },
                   {
            id: 6,
            fullName: "Intervals - Fable (Guitar Cover)",
            link: "https://www.youtube.com/watch?v=WH8l27jMTIg",
            year: "2017",
            gender: "male",
            cover: "/src/image/Fable.jpeg",
            perfomer: "Alex"
        },
                   {
            id: 7,
            fullName: "Sithu Aye - Senpai, Please Notice Me Guitar Cover",
            link: "https://www.youtube.com/watch?v=SDc33tWYZHg",
            year: "2017",
            gender: "male",
            cover: "/src/image/Senpai.jpeg",
            perfomer: "Alex"
        },
                         {
            id: 8,
            fullName: "One ok Rock - Nobody's Home Guitar Cover",
            link: "https://www.youtube.com/watch?v=OF-c1UEwz18",
            year: "2016",
            gender: "male",
            cover: "/src/image/Nobody'sHome.jpeg",
            perfomer: "Alex"
        },


      {
            id: 9,
            fullName: "Puella Magi Madoka Magica OP Claris - Connect コネクト Guitar Cover",
            link: "https://www.youtube.com/watch?v=-y3pllOIowI",
            year: "2021",
            gender: "male",
            cover: "/src/image/Connect.jpeg",
            perfomer: "Alex"

        }


        ]) ;
  return (
  <main className="container">
    <div className="row justify-content-center mt-3 mb-3">
      <div className="col-6">
        <select className="form-select form-select-lg">
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
      <div className="row justify-content-center mt-3 mb-3">
          <div className = "col-8">
              <div className="card-collection">
                  {
                      Videos.map((video) => (
                          <div key={video.id} id={video.id} className="card m-2" style={{cursor: "pointer"}}>
                              <img src={video.cover} className="card-img-top" />
                              <div key={video.id} className="card-body">
                                  <h5 className="card-title">Full Name: {video.fullName}</h5>
                                  <p className="card-text"> <a target="_blank" href={video.link}>youtube</a></p>
                              </div>
                          </div>
                      ))
                  }
              </div>
          </div>
      </div>
  </main>
  )
}
export default Videos;
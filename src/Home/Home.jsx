import './Home.css';
import photo_1 from './photo_1.jpeg';
import photo_2 from './photo_2.jpeg';
import photo_3 from './photo_3.jpeg';
import photo_4 from './photo_4.jpeg';
import photo_5 from './photo_5.jpeg';
import photo_6 from './photo_6.jpeg';
import React, { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';

function Home() {

    const [selectedMember, setSelectedMember] = useState(null);
    

  useEffect(() => {
    // 选择所有的组员元素
    const teamMembers = document.querySelectorAll(".teamMember");
    const container = document.querySelector(".personalIntroduction");

    const radius = 130;//调整半径大小

    // 添加点击事件监听器，使点击的组员放大并出现在环形中央
    teamMembers.forEach((member, index) => {
      const angle = (index / teamMembers.length) * 360; // 计算每个元素应该占据的角度
      const x = radius * Math.cos((angle * Math.PI) / 180) + radius; // 计算x坐标
      const y = radius * Math.sin((angle * Math.PI) / 180) + radius; // 计算y坐标

      // 使用内联样式设置每个组员的位置
      member.style.left = `${x}px`;
      member.style.top = `${y}px`;

      member.addEventListener("click", function () {
        // 移除其他组员的 active 类
        teamMembers.forEach((otherMember) =>
          otherMember.classList.remove("active")
        );
        // 添加 active 类到当前组员
        this.classList.add("active");
        setSelectedMember(this.id);
      });
    });

    // 监听窗口大小改变事件，判断是否需要切换排列方式
    function handleResize() {
      // 判断窗口宽度，小于600px时垂直排列，否则按环形布局
      if (window.innerWidth < 600) {
        document.querySelector(".personalIntroduction").style.flexDirection =
          "column";
      } else {
        document.querySelector(".personalIntroduction").style.flexDirection =
          "row";
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // 初始化时设置初始排列方式

    // 移除事件监听器，避免内存泄漏
    return () => {
      teamMembers.forEach((member) =>
        member.removeEventListener("click", function () {
          // ...
        })
      );
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    

    return (
        <main>
            <div className="resilienceIntroduction">
                <div className="whatIsResilience">
                    What is Resilience?
                </div>
                <div className="video">
                    <VideoPlayer/>
                </div>
            </div>
            <div classNme="title">
                <a>Team Member</a>
            </div>
            <div className="personalIntroduction">
                
                <div id="person_1" className="teamMember">
                    <div className="pototDiv">
                        <img src={photo_1} className="photo" alt="photo_1"/>
                    </div>
                    <div className="responsibility">
                        <p>Data Gathering</p>
                        <p>xxxxxxx@xxx.com</p>
                    </div>
                </div>

                <div id="person_2" className="teamMember">
                    <div className="pototDiv">
                        <img src={photo_2} className="photo" alt="photo_2"/>
                    </div>
                    <div className="responsibility">
                        <p>NPL Precessing</p>
                        <p>xxxxxxx@xxx.com</p>
                    </div>
                </div>

                <div id="person_3" className="teamMember">
                    <div className="pototDiv">
                        <img src={photo_3} className="photo" alt="photo_3"/>
                    </div>
                    <div className="responsibility">
                        <p>Model Tuning</p>
                        <p>xxxxxxx@xxx.com</p>
                    </div>
                </div>

                <div id="person_4" className="teamMember">
                    <div className="pototDiv">
                        <img src={photo_4} className="photo" alt="photo_4"/>
                    </div>
                    <div className="responsibility">
                        <p>QnA</p>
                        <p>xxxxxxx@xxx.com</p>
                    </div>
                </div>

                <div id="person_5" className="teamMember">
                    <div className="pototDiv">
                        <img src={photo_5} className="photo" alt="photo_5"/>
                    </div>
                    <div className="responsibility">
                        <p>Frontend</p>
                        <p>xxxxxxx@xxx.com</p>
                    </div>
                </div>

                <div id="person_6" className="teamMember">
                    <div className="pototDiv">
                        <img src={photo_6} className="photo" alt="photo_6"/>
                    </div>
                    <div className="responsibility">
                        <p>Backend</p>
                        <p>xxxxxxx@xxx.com</p>
                    </div>
                </div>
            </div>
            <div className="guiderintroduction">
                <div>
                    <a>Introduction</a>
                </div>
                <div className="guider">
                    <p>Faculty</p>
                </div>
                <div className="guider">
                    <p>Industry Mentor</p>
                </div>
            </div>
        </main>
    );
}

export default Home;
import "./Mine.css";
import { useState } from "react";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "motion/react";


// بيانات المشاريع

// كود المكون
export default function Mine() {
  // useState*****                  myProjects.filter((p) => p.category === "css")         ***
  const [currentActive, setcurrentActive] = useState("all");

  const [arr, setMyarr] = useState(myProjects);
  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);
    const NEWMEarr = myProjects.filter((item) => {
      const zzz = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });
      return zzz === buttonCategory;
    });
    setMyarr(NEWMEarr);
  };

  // useState*****

  return (
    <main className="All2  flex">
      {/***********************  Section Left  ****************************/}

      <section className="mainLeft   ">
        <button
          onClick={() => {
            setcurrentActive("all");
            setMyarr(myProjects);
            console.log("all");
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projecte
        </button>

        <button
          onClick={() => {
            setcurrentActive("css");
            const NEWMEarr = myProjects.filter((item) => {
              const zzz = item.category.filter((myItem) => {
                return myItem === "css";
              });
              return zzz[0] === "css";
              //
            });
            setMyarr(NEWMEarr);
          }}
          className={currentActive === "css" ? "active" : null}
        >
          html & css
        </button>

        <button
          onClick={() => {
            setcurrentActive("js");
            const NEWMEarr = myProjects.filter((item) => {
              const zzz = item.category.filter((myItem) => {
                return myItem === "js";
              });
              return zzz[0] === "js";
            });
            setMyarr(NEWMEarr);
          }}
          className={currentActive === "js" ? "active" : null}
        >
          java script
        </button>

        <button
          onClick={() => {
            setcurrentActive("react");
            const NEWMEarr = myProjects.filter((item) => {
              const zzz = item.category.filter((myItem) => {
                return myItem === "react";
              });
              return zzz[0] === "react";
            });
            setMyarr(NEWMEarr);
          }}
          className={currentActive === "react" ? "active" : null}
        >
          react & mui
        </button>

        <button
          onClick={() => {
            setcurrentActive("node");
            const NEWMEarr = myProjects.filter((item) => {
              const zzz = item.category.filter((myItem) => {
                return myItem === "node";
              });
              return zzz[0] === "node";
              //
            });
            setMyarr(NEWMEarr);
          }}
          className={currentActive === "node" ? "active" : null}
        >
          Node & express
        </button>
      </section>

      {/************************ section Right ***********************************/}

      <section className="right-section flex  ">
      <AnimatePresence>

        {arr.map((item) => {
          return (
            <motion.article
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.7 }}
              key={item.id}
              className="card "
            >
              {/**************************  محتواي الاول*/}
              <img width={250} height={250} src={item.imgPath} alt="img " />
              {/* ************************  نهايه محتواي الاول*/}

              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.7 }}
                className="bg-white p-4 rounded-xl shadow Box"
                style={{ width: 250 }}
              >
                <h1 className="title">{item.title}</h1>
                <p style={{ height: "110px" }} className="sub-title">
                  {item.P}
                </p>
                <div className=" flex Icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <a className="icon-link " href="#" />
                    <a
                      className="icon-github"
                      target="_blink"
                      href="   https://github.com/Johndawoodsoliman"
                    />
                  </div>

                  <a className="link flex" target="_blink" href={item.link}>
                    more <span className="icon-arrow-right" />
                  </a>
                </div>
              </motion.div>

              {/*  محتواي الاول* */}
            </motion.article>
          );
        })}
        </AnimatePresence>
      </section>
    </main>
  );
}

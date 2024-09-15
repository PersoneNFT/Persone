import { navigation } from "@/data/navigation";
import useMatchMedia from "@/hooks/useMatchMedia";
import isActiveMenu from "@/utils/isActiveMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation(): JSX.Element {
  const path = usePathname();

  // checking media query
  const isMatch = useMatchMedia("(max-width: 991px)");

  return (
    <>
      {isMatch !== null ? (
        <nav
          id={isMatch ? "main-nav-mobi" : "main-nav"}
          className="main-nav"
          style={isMatch ? { display: "none" } : { display: "block" }}
        >
          <ul id="menu-primary-menu" className="menu">
            {navigation?.map((item) => (
              <li
                key={item.id}
                className="menu-item current-menu-item menu-item-has-children"
              >
                <a
                  className={isActiveMenu(item.dropdown, path) ? "active" : ""}
                >
                  {item.name}
                </a>
                <ul className="sub-menu">
                  {item.dropdown?.map((item2) => (
                    <li
                      key={item2.id}
                      className={`menu-item ${
                        item2.dropdown ? "menu-item-has-children" : ""
                      } ${path === item2.path ? "current-item" : ""}`}
                    >
                      {item2.path ? (
                        <Link href={item2.path}>{item2.name}</Link>
                      ) : (
                        <a
                          className={
                            isActiveMenu(item2.dropdown, path) ? "active" : ""
                          }
                        >
                          {" "}
                          {item2.name}
                        </a>
                      )}
                      {item2.dropdown && (
                        <ul className="sub-menu">
                          {item2.dropdown.map((item3) => (
                            <li
                              key={item3.id}
                              className={`menu-item ${
                                path === item3.path ? "current-item" : ""
                              }`}
                            >
                              <Link href={item3.path}>{item3.name}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        ""
      )}
    </>
  );
}

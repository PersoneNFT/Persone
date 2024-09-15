export default function isActiveMenu(children: any, path: string) {
    if (!children && !path) {
        return false;
    }
    return children?.some((item: any) =>
        item.path === path
            ? true
            : item?.dropdown?.some((item2: any) =>
                  item2.path === path ? true : false
              )
    );
}

export const scrollToElement = (
    event: React.MouseEvent<HTMLElement | HTMLAnchorElement | HTMLButtonElement>,
    id: string
) => {
    event.preventDefault(); // Блокируем стандартное поведение

    const targetElement = document.getElementById(id);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });

        // Обновляем URL без перезагрузки страницы
        window.history.pushState(null, "", `#${id}`);
    }
};

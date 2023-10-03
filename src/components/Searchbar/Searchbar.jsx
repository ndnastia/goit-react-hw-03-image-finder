import style from "./Searchbar.module.css"

export const Searchbar = () => {
    return (
        <header className={style["Searchbar"]}>
            <form className={style["SearchForm"]}>
                <button type="submit" className={style["SearchForm-button"]}>
                    <span className={style["SearchForm-button-label"]}>Search</span>
    </button>

    <input
      className={style["SearchForm-input"]}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
    )
}
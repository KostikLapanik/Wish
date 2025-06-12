import globalStyles from '../../Wish.module.scss';
import additionalStyles from './PersonalWish.module.scss'

export function PersonalWish() {
    return (
        <div className={globalStyles.wishCard}>
            <div className={globalStyles.wishImage} id='wishImage'>
                <img src="null" alt="Wish image" />
            </div>

            <div className={globalStyles.wishContent}>
                <div className={globalStyles.userInfo}>
                    <img src="null" alt="User avatar" />

                    <div>
                        <h3 className={globalStyles.userName}>Костя</h3>
                        <p className={globalStyles.userLocation}>
                            <i className="fa-solid fa-location-dot"></i>
                            Минск
                        </p>
                    </div>
                </div>

                <div>
                    <h3 className={globalStyles.wishTitle}>Name of wish</h3>
                    <p className={globalStyles.wishDescription}>Description of the wish item that might be longer than one line and should be properly truncated</p>

                    <div className={globalStyles.wishMeta}>
                        <span className={globalStyles.marketplace}>
                            <i className="fas fa-shopping-bag"></i> Wildberries
                        </span>

                        <span className={globalStyles.price}>199.99 BYN</span>
                    </div>
                </div>

                <div className={additionalStyles.actions}>
                    <button>
                        <i className="fa-solid fa-pencil"></i>
                        Редактировать
                    </button>

                    <button>
                        <i className="fa-solid fa-check"></i>
                        Получено
                    </button>
                </div>
            </div>
        </div>
    )
}
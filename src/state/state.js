import { makeAutoObservable, observable, values, entries, keys, makeObservable, action, toJS } from "mobx"
import { heroes } from '../utils/heroes';
import { stats } from '../utils/stats';
import { strLength } from "../utils/lenthOfString"


class State {
    setHeroes = []
    popupArray = []
    searchArray = []
    compareHeroArray = []
    heroesStats = []
    pathName = null

    // bool = false

    constructor() {
        makeObservable(this, {
            setHeroes: observable,
            heroesStats: observable,
            popupArray: observable,
            searchArray: observable,
            compareHeroArray: observable,
            pathName: observable,
            heroFilter: action,
            heroPopup: action,
            checkSkill: action,
            closeLeft: action,
            closeRight: action,
            setHerosArray: action,
            addHeroes: action,
            sortByPrice: action,
            sortByLevel: action,
            filerHeroes: action,
            sortByRD: action,
            returnHeros: action,
            // hideSkills: action,
        }, { deep: true })
    }
    addPathName(path) {
        this.pathName = path
        console.log(this.pathName, 'this.pathName');
    }

    heroFilter(name) {
        this.searchArray = []
        console.log(this.heroesStats, 'this.heroesStats');

        if (this.pathName === "/heroes") {
            this.heroesStats = heroes.filter(el => {
                if (name === '') return el
                if (el.name.toLowerCase().includes(name.toLowerCase())) {
                    return this.heroesStats
                }
                else return
            }
            )

        } else {
            heroes.filter(el => {
                if (name === '') return el
                if (el.name.toLowerCase().includes(name.toLowerCase())) {
                    this.searchArray.push(el)
                }
                else return
            }
            )

        }

        // heroes.filter(el => {
        //     if (name === '') return el
        //     if (el.name.toLowerCase().includes(name.toLowerCase())) {
        //         this.searchArray.push(el)
        //     }
        //     else return
        //     }
        // )
    }

    heroPopup(name) {
        this.popupArray = []
        heroes.filter(el => {
            // if (name === '') return el
            if (el.name.toLowerCase() === name.toLowerCase()) {
                this.popupArray.push(el)
            }
            else return el
        })

    }

    checkSkill(value) {
        let res
        stats.filter(el => {
            if (value === '') return el
            if (el.toLowerCase().includes(value.toLowerCase())) {
                res = el
            }
            else return el
        })
        return res
    }

    closeLeft(name) {
        this.searchArray = this.searchArray.filter((el, id) =>
            el.name !== name
        )

        this.popupArray = this.popupArray.filter((el, id) =>
            el.name !== name
        )

    }

    closeRight(name) {
        this.compareHeroArray = this.compareHeroArray.filter((el, id) =>
            el.name !== name
        )
    }

    setHerosArray() {
        this.setHeroes = [...this.searchArray, ...this.popupArray]
    }

    addHeroes(name) {
        this.setHeroes.filter(el => el.name === name
            ? this.compareHeroArray.push(el)
            : ''
        )
    }

    // hideSkills(name){
    //     this.bool = !this.bool
    //     array.map(el => el.name === name ? { ...el, bool: this.bool } : el)
    // }

    returnHeros() {
        if (this.heroesStats.length < 1) {
            this.heroesStats = heroes
        }
    }

    filerHeroes(name) {

        this.heroesStats = heroes.filter(el => {
            if (name === 'all') {
                return this.heroesStats
            }

            if (el.special.toLowerCase().includes(name.toLowerCase())) {
                return this.heroesStats
            }

            if (name === 'else' && !el.special.toLowerCase().includes('lowborn') && !el.special.toLowerCase().includes('combat')) {
                return this.heroesStats
            }

        })
    }

    sortByPrice(value) {
        if (value === 'max') {
            this.heroesStats = this.heroesStats.sort((a, b) => a.price - b.price)
        }
        if (value === 'min') {
            this.heroesStats = this.heroesStats.sort((a, b) => b.price - a.price)
        }
        if (value === 'default') {
            this.heroesStats = heroes
        }
    }

    sortByLevel(value) {
        if (value === 'max') {
            this.heroesStats = this.heroesStats.sort((a, b) => strLength(a.level) - strLength(b.level))
        }
        if (value === 'min') {
            this.heroesStats = this.heroesStats.sort((a, b) => strLength(b.level) - strLength(a.level))
        }
        if (value === 'default') {
            this.heroesStats = heroes
        }
    }

    sortByRD(value, name) {
        if (value === 'min') {
            this.heroesStats = this.heroesStats.sort((a, b) => {
                return (
                    b.stats.filter(el => el.skill === name).map(el => el.max)
                    -
                    a.stats.filter(el => el.skill === name).map(el => el.max)
                );
            });
        }

        if (value === 'max') {
            this.heroesStats = this.heroesStats.sort((a, b) => {
                return (
                    a.stats.filter(el => el.skill === name).map(el => el.max)
                    -
                    b.stats.filter(el => el.skill === name).map(el => el.max)
                );
            });
        }
        if (value === 'default') {
            console.log('def');
            return this.heroesStats = heroes
        }
    }
}

export default new State
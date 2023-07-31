import logo from './logo.jpeg';

function Nav(set) {

    function navTo(e, target){
        e.preventDefault();
        set.setPage(target);
    }

    return (
        <nav>
            <div className="logoDiv">
                <img src={logo} className="logo" alt="logo"/>
            </div>
            <ul className="pagenavigation">
                <li className="page__name"><a className="Name" href="/" onClick={ (e) => navTo(e, 'Home' )}>HOME</a> </li>
                <li className="page__name"><a className="Name" href="/ProjectIntro/ProjectIntro" onClick={ (e) => navTo(e, 'ProjectIntro' )}>ProjectIntro</a> </li>
                <li className="page__name"><a className="Name" href="/ProjectIntro/ProjectIntro" onClick={ (e) => navTo(e, 'ProjectIntro' )}>ProjectIntro</a> </li>
                <li className="page__name"><a className="Name" href="/Visualization/Visualization" onClick={ (e) => navTo(e, 'Visualization' )}>Visualization</a> </li>
            </ul>
        </nav>
    );
}

export default Nav;
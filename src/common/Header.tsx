import './Common.scss';
import './Header.scss';
export default function Header() {
  return (
    <div className="header">
      <a href="javascript:void(0)" className="header-logo">
        <img src="/images/logo-top.png" alt="" />
      </a>
      <ul className="itemlist">
        <li>
          <div>
            <a href="javascript:void(0)">main</a>
          </div>
        </li>
        <li>
          <div>
            <a href="javascript:void(0)">content1</a>
          </div>
        </li>
        <li>
          <div>
            <a href="javascript:void(0)">content2</a>
          </div>
        </li>
        <li>
          <div>
            <a href="javascript:void(0)">content3</a>
          </div>
        </li>
      </ul>
    </div>
  );
}

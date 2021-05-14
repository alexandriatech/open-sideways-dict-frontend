import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import styles from "./styles.module.scss";

function Loader(props){
  return(
    <div className={classNames(styles.loaderWrapper, {
      [styles.active]: props.isLoading
    })}>
      <div className={classNames(styles.loader, {
      [styles.inverse]: props.inverse
      })}></div>
    </div>
  )
}

Loader.propTypes = {
  isLoading: PropTypes.bool,
  inver: PropTypes.bool,
}

Loader.defaultProps = {
  isLoading: true
}

export default Loader;

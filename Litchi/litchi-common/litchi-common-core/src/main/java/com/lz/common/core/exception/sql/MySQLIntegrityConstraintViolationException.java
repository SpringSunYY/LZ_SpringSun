package com.lz.common.core.exception.sql;

/**
 * Project: Litchi
 * Package: com.lz.common.core.exception.sql
 * Author: YY
 * CreateTime: 2024-12-28  17:06
 * Description: SQLIntegrityConstraintViolationException
 * Version: 1.0
 */
public class MySQLIntegrityConstraintViolationException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    public MySQLIntegrityConstraintViolationException(String msg)
    {
        super(msg);
    }

    public MySQLIntegrityConstraintViolationException()
    {

    }

}

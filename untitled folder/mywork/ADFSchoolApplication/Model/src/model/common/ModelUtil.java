package model.common;

import java.math.BigDecimal;

import java.sql.Timestamp;

import oracle.jbo.server.DBTransaction;
import oracle.jbo.server.SequenceImpl;
//import java.util.Date;


public class ModelUtil
{
  
  /**
   
   * @param transaction
   * @return  BigDecimal the next sequence
   */
  public static BigDecimal getSequenceNextVal(DBTransaction transaction)
  {
    SequenceImpl seq = new SequenceImpl("ID_SEQ",transaction); 
    return new BigDecimal(seq.getSequenceNumber().toString());
  }
  
  public static Timestamp getCurrentDate()
  {
      java.util.Date today = new java.util.Date();
      return new Timestamp(today.getTime());
  }
  
  
  
  
}

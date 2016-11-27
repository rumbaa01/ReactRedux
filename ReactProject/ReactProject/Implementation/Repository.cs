using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ReactProject.Interfaces;
using ReactProject.Models;

namespace ReactProject.Implementation
{
    public class Repository : IRepository
    {
        private readonly AppContext _appDbContext;

        public Repository(AppContext appDbContext) 
        {
            _appDbContext = appDbContext;
        }
        public IEnumerable<Month> GetAllMonth()
        {
            return _appDbContext.Months;
        }
    }
}
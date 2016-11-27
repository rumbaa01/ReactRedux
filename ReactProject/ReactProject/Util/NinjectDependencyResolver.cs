using System;
using System.Collections.Generic;
using System.Linq;
using Ninject;
using System.Web;
using ReactProject.Implementation;
using ReactProject.Interfaces;
using System.Web.Mvc;

namespace ReactProject.Util
{
    public class NinjectDependencyResolver : IDependencyResolver
    {
        private IKernel kernel;
        public NinjectDependencyResolver()
        {
            kernel = new StandardKernel();
            AddBindings();
        }
        public object GetService(Type serviceType)
        {
            return kernel.TryGet(serviceType);
        }
        public IEnumerable<object> GetServices(Type serviceType)
        {
            return kernel.GetAll(serviceType);
        }
        private void AddBindings()
        {
            kernel.Bind<IRepository>().To<Repository>();
        }
    }
}
import React from 'react';

export default function Modal({ projectModals }) {
  return (
      <div>
          {projectModals.map((projectModals) => (
            <div class="modal fade" id={projectModals.content.id} tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title">{`${projectModals.content.title}`}</h3>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        
                            <img src={projectModals.content.imgSrc} width="100%" height="auto" alt="" />
                        <div class="modal-body">
                            <p>Deployed Version: <a href={projectModals.content.deployedLink} target="_blank" rel="noreferrer">{projectModals.content.deployedLink}</a></p>
                            <p>GitHub Repository: <a href={projectModals.content.repository} target="_blank" rel="noreferrer">{projectModals.content.repository}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  );
}